'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14197<T> = T extends (infer U)[]
  ? DeepReadonlyArray14197<U>
  : T extends object
  ? DeepReadonlyObject14197<T>
  : T;

interface DeepReadonlyArray14197<T> extends ReadonlyArray<DeepReadonly14197<T>> {}

type DeepReadonlyObject14197<T> = {
  readonly [P in keyof T]: DeepReadonly14197<T[P]>;
};

type UnionToIntersection14197<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14197<T> = UnionToIntersection14197<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14197<T extends unknown[], V> = [...T, V];

type TuplifyUnion14197<T, L = LastOf14197<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14197<TuplifyUnion14197<Exclude<T, L>>, L>;

type DeepPartial14197<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14197<T[P]> }
  : T;

type Paths14197<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14197<K, Paths14197<T[K], Prev14197[D]>> : never }[keyof T]
  : never;

type Prev14197 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14197<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14197 {
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

type ConfigPaths14197 = Paths14197<NestedConfig14197>;

interface HeavyProps14197 {
  config: DeepPartial14197<NestedConfig14197>;
  path?: ConfigPaths14197;
}

const HeavyComponent14197 = memo(function HeavyComponent14197({ config }: HeavyProps14197) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14197) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14197 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14197: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14197.displayName = 'HeavyComponent14197';
export default HeavyComponent14197;
