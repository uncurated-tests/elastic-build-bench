'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14562<T> = T extends (infer U)[]
  ? DeepReadonlyArray14562<U>
  : T extends object
  ? DeepReadonlyObject14562<T>
  : T;

interface DeepReadonlyArray14562<T> extends ReadonlyArray<DeepReadonly14562<T>> {}

type DeepReadonlyObject14562<T> = {
  readonly [P in keyof T]: DeepReadonly14562<T[P]>;
};

type UnionToIntersection14562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14562<T> = UnionToIntersection14562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14562<T extends unknown[], V> = [...T, V];

type TuplifyUnion14562<T, L = LastOf14562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14562<TuplifyUnion14562<Exclude<T, L>>, L>;

type DeepPartial14562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14562<T[P]> }
  : T;

type Paths14562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14562<K, Paths14562<T[K], Prev14562[D]>> : never }[keyof T]
  : never;

type Prev14562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14562 {
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

type ConfigPaths14562 = Paths14562<NestedConfig14562>;

interface HeavyProps14562 {
  config: DeepPartial14562<NestedConfig14562>;
  path?: ConfigPaths14562;
}

const HeavyComponent14562 = memo(function HeavyComponent14562({ config }: HeavyProps14562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14562.displayName = 'HeavyComponent14562';
export default HeavyComponent14562;
