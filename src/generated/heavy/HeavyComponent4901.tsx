'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4901<T> = T extends (infer U)[]
  ? DeepReadonlyArray4901<U>
  : T extends object
  ? DeepReadonlyObject4901<T>
  : T;

interface DeepReadonlyArray4901<T> extends ReadonlyArray<DeepReadonly4901<T>> {}

type DeepReadonlyObject4901<T> = {
  readonly [P in keyof T]: DeepReadonly4901<T[P]>;
};

type UnionToIntersection4901<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4901<T> = UnionToIntersection4901<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4901<T extends unknown[], V> = [...T, V];

type TuplifyUnion4901<T, L = LastOf4901<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4901<TuplifyUnion4901<Exclude<T, L>>, L>;

type DeepPartial4901<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4901<T[P]> }
  : T;

type Paths4901<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4901<K, Paths4901<T[K], Prev4901[D]>> : never }[keyof T]
  : never;

type Prev4901 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4901<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4901 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths4901 = Paths4901<NestedConfig4901>;

interface HeavyProps4901 {
  config: DeepPartial4901<NestedConfig4901>;
  path?: ConfigPaths4901;
}

const HeavyComponent4901 = memo(function HeavyComponent4901({ config }: HeavyProps4901) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4901) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4901 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4901: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4901.displayName = 'HeavyComponent4901';
export default HeavyComponent4901;
