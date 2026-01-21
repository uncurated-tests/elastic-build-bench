'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14817<T> = T extends (infer U)[]
  ? DeepReadonlyArray14817<U>
  : T extends object
  ? DeepReadonlyObject14817<T>
  : T;

interface DeepReadonlyArray14817<T> extends ReadonlyArray<DeepReadonly14817<T>> {}

type DeepReadonlyObject14817<T> = {
  readonly [P in keyof T]: DeepReadonly14817<T[P]>;
};

type UnionToIntersection14817<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14817<T> = UnionToIntersection14817<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14817<T extends unknown[], V> = [...T, V];

type TuplifyUnion14817<T, L = LastOf14817<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14817<TuplifyUnion14817<Exclude<T, L>>, L>;

type DeepPartial14817<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14817<T[P]> }
  : T;

type Paths14817<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14817<K, Paths14817<T[K], Prev14817[D]>> : never }[keyof T]
  : never;

type Prev14817 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14817<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14817 {
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

type ConfigPaths14817 = Paths14817<NestedConfig14817>;

interface HeavyProps14817 {
  config: DeepPartial14817<NestedConfig14817>;
  path?: ConfigPaths14817;
}

const HeavyComponent14817 = memo(function HeavyComponent14817({ config }: HeavyProps14817) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14817) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14817 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14817: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14817.displayName = 'HeavyComponent14817';
export default HeavyComponent14817;
