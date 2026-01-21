'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4151<T> = T extends (infer U)[]
  ? DeepReadonlyArray4151<U>
  : T extends object
  ? DeepReadonlyObject4151<T>
  : T;

interface DeepReadonlyArray4151<T> extends ReadonlyArray<DeepReadonly4151<T>> {}

type DeepReadonlyObject4151<T> = {
  readonly [P in keyof T]: DeepReadonly4151<T[P]>;
};

type UnionToIntersection4151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4151<T> = UnionToIntersection4151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4151<T extends unknown[], V> = [...T, V];

type TuplifyUnion4151<T, L = LastOf4151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4151<TuplifyUnion4151<Exclude<T, L>>, L>;

type DeepPartial4151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4151<T[P]> }
  : T;

type Paths4151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4151<K, Paths4151<T[K], Prev4151[D]>> : never }[keyof T]
  : never;

type Prev4151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4151 {
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

type ConfigPaths4151 = Paths4151<NestedConfig4151>;

interface HeavyProps4151 {
  config: DeepPartial4151<NestedConfig4151>;
  path?: ConfigPaths4151;
}

const HeavyComponent4151 = memo(function HeavyComponent4151({ config }: HeavyProps4151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4151.displayName = 'HeavyComponent4151';
export default HeavyComponent4151;
