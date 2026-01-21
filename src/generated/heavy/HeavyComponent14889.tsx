'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14889<T> = T extends (infer U)[]
  ? DeepReadonlyArray14889<U>
  : T extends object
  ? DeepReadonlyObject14889<T>
  : T;

interface DeepReadonlyArray14889<T> extends ReadonlyArray<DeepReadonly14889<T>> {}

type DeepReadonlyObject14889<T> = {
  readonly [P in keyof T]: DeepReadonly14889<T[P]>;
};

type UnionToIntersection14889<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14889<T> = UnionToIntersection14889<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14889<T extends unknown[], V> = [...T, V];

type TuplifyUnion14889<T, L = LastOf14889<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14889<TuplifyUnion14889<Exclude<T, L>>, L>;

type DeepPartial14889<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14889<T[P]> }
  : T;

type Paths14889<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14889<K, Paths14889<T[K], Prev14889[D]>> : never }[keyof T]
  : never;

type Prev14889 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14889<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14889 {
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

type ConfigPaths14889 = Paths14889<NestedConfig14889>;

interface HeavyProps14889 {
  config: DeepPartial14889<NestedConfig14889>;
  path?: ConfigPaths14889;
}

const HeavyComponent14889 = memo(function HeavyComponent14889({ config }: HeavyProps14889) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14889) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14889 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14889: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14889.displayName = 'HeavyComponent14889';
export default HeavyComponent14889;
