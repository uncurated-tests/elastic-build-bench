'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14443<T> = T extends (infer U)[]
  ? DeepReadonlyArray14443<U>
  : T extends object
  ? DeepReadonlyObject14443<T>
  : T;

interface DeepReadonlyArray14443<T> extends ReadonlyArray<DeepReadonly14443<T>> {}

type DeepReadonlyObject14443<T> = {
  readonly [P in keyof T]: DeepReadonly14443<T[P]>;
};

type UnionToIntersection14443<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14443<T> = UnionToIntersection14443<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14443<T extends unknown[], V> = [...T, V];

type TuplifyUnion14443<T, L = LastOf14443<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14443<TuplifyUnion14443<Exclude<T, L>>, L>;

type DeepPartial14443<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14443<T[P]> }
  : T;

type Paths14443<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14443<K, Paths14443<T[K], Prev14443[D]>> : never }[keyof T]
  : never;

type Prev14443 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14443<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14443 {
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

type ConfigPaths14443 = Paths14443<NestedConfig14443>;

interface HeavyProps14443 {
  config: DeepPartial14443<NestedConfig14443>;
  path?: ConfigPaths14443;
}

const HeavyComponent14443 = memo(function HeavyComponent14443({ config }: HeavyProps14443) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14443) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14443 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14443: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14443.displayName = 'HeavyComponent14443';
export default HeavyComponent14443;
