'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4417<T> = T extends (infer U)[]
  ? DeepReadonlyArray4417<U>
  : T extends object
  ? DeepReadonlyObject4417<T>
  : T;

interface DeepReadonlyArray4417<T> extends ReadonlyArray<DeepReadonly4417<T>> {}

type DeepReadonlyObject4417<T> = {
  readonly [P in keyof T]: DeepReadonly4417<T[P]>;
};

type UnionToIntersection4417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4417<T> = UnionToIntersection4417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4417<T extends unknown[], V> = [...T, V];

type TuplifyUnion4417<T, L = LastOf4417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4417<TuplifyUnion4417<Exclude<T, L>>, L>;

type DeepPartial4417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4417<T[P]> }
  : T;

type Paths4417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4417<K, Paths4417<T[K], Prev4417[D]>> : never }[keyof T]
  : never;

type Prev4417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4417 {
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

type ConfigPaths4417 = Paths4417<NestedConfig4417>;

interface HeavyProps4417 {
  config: DeepPartial4417<NestedConfig4417>;
  path?: ConfigPaths4417;
}

const HeavyComponent4417 = memo(function HeavyComponent4417({ config }: HeavyProps4417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4417.displayName = 'HeavyComponent4417';
export default HeavyComponent4417;
