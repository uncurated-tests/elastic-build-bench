'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14410<T> = T extends (infer U)[]
  ? DeepReadonlyArray14410<U>
  : T extends object
  ? DeepReadonlyObject14410<T>
  : T;

interface DeepReadonlyArray14410<T> extends ReadonlyArray<DeepReadonly14410<T>> {}

type DeepReadonlyObject14410<T> = {
  readonly [P in keyof T]: DeepReadonly14410<T[P]>;
};

type UnionToIntersection14410<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14410<T> = UnionToIntersection14410<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14410<T extends unknown[], V> = [...T, V];

type TuplifyUnion14410<T, L = LastOf14410<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14410<TuplifyUnion14410<Exclude<T, L>>, L>;

type DeepPartial14410<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14410<T[P]> }
  : T;

type Paths14410<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14410<K, Paths14410<T[K], Prev14410[D]>> : never }[keyof T]
  : never;

type Prev14410 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14410<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14410 {
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

type ConfigPaths14410 = Paths14410<NestedConfig14410>;

interface HeavyProps14410 {
  config: DeepPartial14410<NestedConfig14410>;
  path?: ConfigPaths14410;
}

const HeavyComponent14410 = memo(function HeavyComponent14410({ config }: HeavyProps14410) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14410) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14410 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14410: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14410.displayName = 'HeavyComponent14410';
export default HeavyComponent14410;
