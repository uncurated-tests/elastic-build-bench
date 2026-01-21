'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14797<T> = T extends (infer U)[]
  ? DeepReadonlyArray14797<U>
  : T extends object
  ? DeepReadonlyObject14797<T>
  : T;

interface DeepReadonlyArray14797<T> extends ReadonlyArray<DeepReadonly14797<T>> {}

type DeepReadonlyObject14797<T> = {
  readonly [P in keyof T]: DeepReadonly14797<T[P]>;
};

type UnionToIntersection14797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14797<T> = UnionToIntersection14797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14797<T extends unknown[], V> = [...T, V];

type TuplifyUnion14797<T, L = LastOf14797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14797<TuplifyUnion14797<Exclude<T, L>>, L>;

type DeepPartial14797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14797<T[P]> }
  : T;

type Paths14797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14797<K, Paths14797<T[K], Prev14797[D]>> : never }[keyof T]
  : never;

type Prev14797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14797 {
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

type ConfigPaths14797 = Paths14797<NestedConfig14797>;

interface HeavyProps14797 {
  config: DeepPartial14797<NestedConfig14797>;
  path?: ConfigPaths14797;
}

const HeavyComponent14797 = memo(function HeavyComponent14797({ config }: HeavyProps14797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14797.displayName = 'HeavyComponent14797';
export default HeavyComponent14797;
