'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14611<T> = T extends (infer U)[]
  ? DeepReadonlyArray14611<U>
  : T extends object
  ? DeepReadonlyObject14611<T>
  : T;

interface DeepReadonlyArray14611<T> extends ReadonlyArray<DeepReadonly14611<T>> {}

type DeepReadonlyObject14611<T> = {
  readonly [P in keyof T]: DeepReadonly14611<T[P]>;
};

type UnionToIntersection14611<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14611<T> = UnionToIntersection14611<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14611<T extends unknown[], V> = [...T, V];

type TuplifyUnion14611<T, L = LastOf14611<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14611<TuplifyUnion14611<Exclude<T, L>>, L>;

type DeepPartial14611<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14611<T[P]> }
  : T;

type Paths14611<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14611<K, Paths14611<T[K], Prev14611[D]>> : never }[keyof T]
  : never;

type Prev14611 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14611<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14611 {
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

type ConfigPaths14611 = Paths14611<NestedConfig14611>;

interface HeavyProps14611 {
  config: DeepPartial14611<NestedConfig14611>;
  path?: ConfigPaths14611;
}

const HeavyComponent14611 = memo(function HeavyComponent14611({ config }: HeavyProps14611) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14611) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14611 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14611: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14611.displayName = 'HeavyComponent14611';
export default HeavyComponent14611;
