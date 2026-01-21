'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14123<T> = T extends (infer U)[]
  ? DeepReadonlyArray14123<U>
  : T extends object
  ? DeepReadonlyObject14123<T>
  : T;

interface DeepReadonlyArray14123<T> extends ReadonlyArray<DeepReadonly14123<T>> {}

type DeepReadonlyObject14123<T> = {
  readonly [P in keyof T]: DeepReadonly14123<T[P]>;
};

type UnionToIntersection14123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14123<T> = UnionToIntersection14123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14123<T extends unknown[], V> = [...T, V];

type TuplifyUnion14123<T, L = LastOf14123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14123<TuplifyUnion14123<Exclude<T, L>>, L>;

type DeepPartial14123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14123<T[P]> }
  : T;

type Paths14123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14123<K, Paths14123<T[K], Prev14123[D]>> : never }[keyof T]
  : never;

type Prev14123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14123 {
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

type ConfigPaths14123 = Paths14123<NestedConfig14123>;

interface HeavyProps14123 {
  config: DeepPartial14123<NestedConfig14123>;
  path?: ConfigPaths14123;
}

const HeavyComponent14123 = memo(function HeavyComponent14123({ config }: HeavyProps14123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14123.displayName = 'HeavyComponent14123';
export default HeavyComponent14123;
