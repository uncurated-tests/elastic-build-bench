'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly103<T> = T extends (infer U)[]
  ? DeepReadonlyArray103<U>
  : T extends object
  ? DeepReadonlyObject103<T>
  : T;

interface DeepReadonlyArray103<T> extends ReadonlyArray<DeepReadonly103<T>> {}

type DeepReadonlyObject103<T> = {
  readonly [P in keyof T]: DeepReadonly103<T[P]>;
};

type UnionToIntersection103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf103<T> = UnionToIntersection103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push103<T extends unknown[], V> = [...T, V];

type TuplifyUnion103<T, L = LastOf103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push103<TuplifyUnion103<Exclude<T, L>>, L>;

type DeepPartial103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial103<T[P]> }
  : T;

type Paths103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join103<K, Paths103<T[K], Prev103[D]>> : never }[keyof T]
  : never;

type Prev103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig103 {
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

type ConfigPaths103 = Paths103<NestedConfig103>;

interface HeavyProps103 {
  config: DeepPartial103<NestedConfig103>;
  path?: ConfigPaths103;
}

const HeavyComponent103 = memo(function HeavyComponent103({ config }: HeavyProps103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent103.displayName = 'HeavyComponent103';
export default HeavyComponent103;
