'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4732<T> = T extends (infer U)[]
  ? DeepReadonlyArray4732<U>
  : T extends object
  ? DeepReadonlyObject4732<T>
  : T;

interface DeepReadonlyArray4732<T> extends ReadonlyArray<DeepReadonly4732<T>> {}

type DeepReadonlyObject4732<T> = {
  readonly [P in keyof T]: DeepReadonly4732<T[P]>;
};

type UnionToIntersection4732<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4732<T> = UnionToIntersection4732<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4732<T extends unknown[], V> = [...T, V];

type TuplifyUnion4732<T, L = LastOf4732<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4732<TuplifyUnion4732<Exclude<T, L>>, L>;

type DeepPartial4732<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4732<T[P]> }
  : T;

type Paths4732<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4732<K, Paths4732<T[K], Prev4732[D]>> : never }[keyof T]
  : never;

type Prev4732 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4732<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4732 {
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

type ConfigPaths4732 = Paths4732<NestedConfig4732>;

interface HeavyProps4732 {
  config: DeepPartial4732<NestedConfig4732>;
  path?: ConfigPaths4732;
}

const HeavyComponent4732 = memo(function HeavyComponent4732({ config }: HeavyProps4732) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4732) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4732 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4732: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4732.displayName = 'HeavyComponent4732';
export default HeavyComponent4732;
