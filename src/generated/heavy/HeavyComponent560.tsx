'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly560<T> = T extends (infer U)[]
  ? DeepReadonlyArray560<U>
  : T extends object
  ? DeepReadonlyObject560<T>
  : T;

interface DeepReadonlyArray560<T> extends ReadonlyArray<DeepReadonly560<T>> {}

type DeepReadonlyObject560<T> = {
  readonly [P in keyof T]: DeepReadonly560<T[P]>;
};

type UnionToIntersection560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf560<T> = UnionToIntersection560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push560<T extends unknown[], V> = [...T, V];

type TuplifyUnion560<T, L = LastOf560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push560<TuplifyUnion560<Exclude<T, L>>, L>;

type DeepPartial560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial560<T[P]> }
  : T;

type Paths560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join560<K, Paths560<T[K], Prev560[D]>> : never }[keyof T]
  : never;

type Prev560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig560 {
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

type ConfigPaths560 = Paths560<NestedConfig560>;

interface HeavyProps560 {
  config: DeepPartial560<NestedConfig560>;
  path?: ConfigPaths560;
}

const HeavyComponent560 = memo(function HeavyComponent560({ config }: HeavyProps560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent560.displayName = 'HeavyComponent560';
export default HeavyComponent560;
