'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14127<T> = T extends (infer U)[]
  ? DeepReadonlyArray14127<U>
  : T extends object
  ? DeepReadonlyObject14127<T>
  : T;

interface DeepReadonlyArray14127<T> extends ReadonlyArray<DeepReadonly14127<T>> {}

type DeepReadonlyObject14127<T> = {
  readonly [P in keyof T]: DeepReadonly14127<T[P]>;
};

type UnionToIntersection14127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14127<T> = UnionToIntersection14127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14127<T extends unknown[], V> = [...T, V];

type TuplifyUnion14127<T, L = LastOf14127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14127<TuplifyUnion14127<Exclude<T, L>>, L>;

type DeepPartial14127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14127<T[P]> }
  : T;

type Paths14127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14127<K, Paths14127<T[K], Prev14127[D]>> : never }[keyof T]
  : never;

type Prev14127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14127 {
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

type ConfigPaths14127 = Paths14127<NestedConfig14127>;

interface HeavyProps14127 {
  config: DeepPartial14127<NestedConfig14127>;
  path?: ConfigPaths14127;
}

const HeavyComponent14127 = memo(function HeavyComponent14127({ config }: HeavyProps14127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14127.displayName = 'HeavyComponent14127';
export default HeavyComponent14127;
