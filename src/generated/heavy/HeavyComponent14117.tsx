'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14117<T> = T extends (infer U)[]
  ? DeepReadonlyArray14117<U>
  : T extends object
  ? DeepReadonlyObject14117<T>
  : T;

interface DeepReadonlyArray14117<T> extends ReadonlyArray<DeepReadonly14117<T>> {}

type DeepReadonlyObject14117<T> = {
  readonly [P in keyof T]: DeepReadonly14117<T[P]>;
};

type UnionToIntersection14117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14117<T> = UnionToIntersection14117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14117<T extends unknown[], V> = [...T, V];

type TuplifyUnion14117<T, L = LastOf14117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14117<TuplifyUnion14117<Exclude<T, L>>, L>;

type DeepPartial14117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14117<T[P]> }
  : T;

type Paths14117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14117<K, Paths14117<T[K], Prev14117[D]>> : never }[keyof T]
  : never;

type Prev14117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14117 {
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

type ConfigPaths14117 = Paths14117<NestedConfig14117>;

interface HeavyProps14117 {
  config: DeepPartial14117<NestedConfig14117>;
  path?: ConfigPaths14117;
}

const HeavyComponent14117 = memo(function HeavyComponent14117({ config }: HeavyProps14117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14117.displayName = 'HeavyComponent14117';
export default HeavyComponent14117;
