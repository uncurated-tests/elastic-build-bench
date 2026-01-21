'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14376<T> = T extends (infer U)[]
  ? DeepReadonlyArray14376<U>
  : T extends object
  ? DeepReadonlyObject14376<T>
  : T;

interface DeepReadonlyArray14376<T> extends ReadonlyArray<DeepReadonly14376<T>> {}

type DeepReadonlyObject14376<T> = {
  readonly [P in keyof T]: DeepReadonly14376<T[P]>;
};

type UnionToIntersection14376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14376<T> = UnionToIntersection14376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14376<T extends unknown[], V> = [...T, V];

type TuplifyUnion14376<T, L = LastOf14376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14376<TuplifyUnion14376<Exclude<T, L>>, L>;

type DeepPartial14376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14376<T[P]> }
  : T;

type Paths14376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14376<K, Paths14376<T[K], Prev14376[D]>> : never }[keyof T]
  : never;

type Prev14376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14376 {
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

type ConfigPaths14376 = Paths14376<NestedConfig14376>;

interface HeavyProps14376 {
  config: DeepPartial14376<NestedConfig14376>;
  path?: ConfigPaths14376;
}

const HeavyComponent14376 = memo(function HeavyComponent14376({ config }: HeavyProps14376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14376.displayName = 'HeavyComponent14376';
export default HeavyComponent14376;
