'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14241<T> = T extends (infer U)[]
  ? DeepReadonlyArray14241<U>
  : T extends object
  ? DeepReadonlyObject14241<T>
  : T;

interface DeepReadonlyArray14241<T> extends ReadonlyArray<DeepReadonly14241<T>> {}

type DeepReadonlyObject14241<T> = {
  readonly [P in keyof T]: DeepReadonly14241<T[P]>;
};

type UnionToIntersection14241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14241<T> = UnionToIntersection14241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14241<T extends unknown[], V> = [...T, V];

type TuplifyUnion14241<T, L = LastOf14241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14241<TuplifyUnion14241<Exclude<T, L>>, L>;

type DeepPartial14241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14241<T[P]> }
  : T;

type Paths14241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14241<K, Paths14241<T[K], Prev14241[D]>> : never }[keyof T]
  : never;

type Prev14241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14241 {
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

type ConfigPaths14241 = Paths14241<NestedConfig14241>;

interface HeavyProps14241 {
  config: DeepPartial14241<NestedConfig14241>;
  path?: ConfigPaths14241;
}

const HeavyComponent14241 = memo(function HeavyComponent14241({ config }: HeavyProps14241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14241.displayName = 'HeavyComponent14241';
export default HeavyComponent14241;
