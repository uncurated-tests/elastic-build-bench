'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13103<T> = T extends (infer U)[]
  ? DeepReadonlyArray13103<U>
  : T extends object
  ? DeepReadonlyObject13103<T>
  : T;

interface DeepReadonlyArray13103<T> extends ReadonlyArray<DeepReadonly13103<T>> {}

type DeepReadonlyObject13103<T> = {
  readonly [P in keyof T]: DeepReadonly13103<T[P]>;
};

type UnionToIntersection13103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13103<T> = UnionToIntersection13103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13103<T extends unknown[], V> = [...T, V];

type TuplifyUnion13103<T, L = LastOf13103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13103<TuplifyUnion13103<Exclude<T, L>>, L>;

type DeepPartial13103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13103<T[P]> }
  : T;

type Paths13103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13103<K, Paths13103<T[K], Prev13103[D]>> : never }[keyof T]
  : never;

type Prev13103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13103 {
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

type ConfigPaths13103 = Paths13103<NestedConfig13103>;

interface HeavyProps13103 {
  config: DeepPartial13103<NestedConfig13103>;
  path?: ConfigPaths13103;
}

const HeavyComponent13103 = memo(function HeavyComponent13103({ config }: HeavyProps13103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13103.displayName = 'HeavyComponent13103';
export default HeavyComponent13103;
