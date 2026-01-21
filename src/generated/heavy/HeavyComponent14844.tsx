'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14844<T> = T extends (infer U)[]
  ? DeepReadonlyArray14844<U>
  : T extends object
  ? DeepReadonlyObject14844<T>
  : T;

interface DeepReadonlyArray14844<T> extends ReadonlyArray<DeepReadonly14844<T>> {}

type DeepReadonlyObject14844<T> = {
  readonly [P in keyof T]: DeepReadonly14844<T[P]>;
};

type UnionToIntersection14844<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14844<T> = UnionToIntersection14844<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14844<T extends unknown[], V> = [...T, V];

type TuplifyUnion14844<T, L = LastOf14844<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14844<TuplifyUnion14844<Exclude<T, L>>, L>;

type DeepPartial14844<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14844<T[P]> }
  : T;

type Paths14844<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14844<K, Paths14844<T[K], Prev14844[D]>> : never }[keyof T]
  : never;

type Prev14844 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14844<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14844 {
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

type ConfigPaths14844 = Paths14844<NestedConfig14844>;

interface HeavyProps14844 {
  config: DeepPartial14844<NestedConfig14844>;
  path?: ConfigPaths14844;
}

const HeavyComponent14844 = memo(function HeavyComponent14844({ config }: HeavyProps14844) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14844) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14844 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14844: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14844.displayName = 'HeavyComponent14844';
export default HeavyComponent14844;
