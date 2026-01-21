'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14781<T> = T extends (infer U)[]
  ? DeepReadonlyArray14781<U>
  : T extends object
  ? DeepReadonlyObject14781<T>
  : T;

interface DeepReadonlyArray14781<T> extends ReadonlyArray<DeepReadonly14781<T>> {}

type DeepReadonlyObject14781<T> = {
  readonly [P in keyof T]: DeepReadonly14781<T[P]>;
};

type UnionToIntersection14781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14781<T> = UnionToIntersection14781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14781<T extends unknown[], V> = [...T, V];

type TuplifyUnion14781<T, L = LastOf14781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14781<TuplifyUnion14781<Exclude<T, L>>, L>;

type DeepPartial14781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14781<T[P]> }
  : T;

type Paths14781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14781<K, Paths14781<T[K], Prev14781[D]>> : never }[keyof T]
  : never;

type Prev14781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14781 {
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

type ConfigPaths14781 = Paths14781<NestedConfig14781>;

interface HeavyProps14781 {
  config: DeepPartial14781<NestedConfig14781>;
  path?: ConfigPaths14781;
}

const HeavyComponent14781 = memo(function HeavyComponent14781({ config }: HeavyProps14781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14781.displayName = 'HeavyComponent14781';
export default HeavyComponent14781;
