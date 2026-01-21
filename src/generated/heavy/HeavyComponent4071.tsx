'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4071<T> = T extends (infer U)[]
  ? DeepReadonlyArray4071<U>
  : T extends object
  ? DeepReadonlyObject4071<T>
  : T;

interface DeepReadonlyArray4071<T> extends ReadonlyArray<DeepReadonly4071<T>> {}

type DeepReadonlyObject4071<T> = {
  readonly [P in keyof T]: DeepReadonly4071<T[P]>;
};

type UnionToIntersection4071<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4071<T> = UnionToIntersection4071<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4071<T extends unknown[], V> = [...T, V];

type TuplifyUnion4071<T, L = LastOf4071<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4071<TuplifyUnion4071<Exclude<T, L>>, L>;

type DeepPartial4071<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4071<T[P]> }
  : T;

type Paths4071<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4071<K, Paths4071<T[K], Prev4071[D]>> : never }[keyof T]
  : never;

type Prev4071 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4071<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4071 {
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

type ConfigPaths4071 = Paths4071<NestedConfig4071>;

interface HeavyProps4071 {
  config: DeepPartial4071<NestedConfig4071>;
  path?: ConfigPaths4071;
}

const HeavyComponent4071 = memo(function HeavyComponent4071({ config }: HeavyProps4071) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4071) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4071 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4071: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4071.displayName = 'HeavyComponent4071';
export default HeavyComponent4071;
