'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4889<T> = T extends (infer U)[]
  ? DeepReadonlyArray4889<U>
  : T extends object
  ? DeepReadonlyObject4889<T>
  : T;

interface DeepReadonlyArray4889<T> extends ReadonlyArray<DeepReadonly4889<T>> {}

type DeepReadonlyObject4889<T> = {
  readonly [P in keyof T]: DeepReadonly4889<T[P]>;
};

type UnionToIntersection4889<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4889<T> = UnionToIntersection4889<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4889<T extends unknown[], V> = [...T, V];

type TuplifyUnion4889<T, L = LastOf4889<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4889<TuplifyUnion4889<Exclude<T, L>>, L>;

type DeepPartial4889<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4889<T[P]> }
  : T;

type Paths4889<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4889<K, Paths4889<T[K], Prev4889[D]>> : never }[keyof T]
  : never;

type Prev4889 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4889<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4889 {
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

type ConfigPaths4889 = Paths4889<NestedConfig4889>;

interface HeavyProps4889 {
  config: DeepPartial4889<NestedConfig4889>;
  path?: ConfigPaths4889;
}

const HeavyComponent4889 = memo(function HeavyComponent4889({ config }: HeavyProps4889) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4889) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4889 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4889: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4889.displayName = 'HeavyComponent4889';
export default HeavyComponent4889;
