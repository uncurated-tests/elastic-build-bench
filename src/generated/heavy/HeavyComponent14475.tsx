'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14475<T> = T extends (infer U)[]
  ? DeepReadonlyArray14475<U>
  : T extends object
  ? DeepReadonlyObject14475<T>
  : T;

interface DeepReadonlyArray14475<T> extends ReadonlyArray<DeepReadonly14475<T>> {}

type DeepReadonlyObject14475<T> = {
  readonly [P in keyof T]: DeepReadonly14475<T[P]>;
};

type UnionToIntersection14475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14475<T> = UnionToIntersection14475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14475<T extends unknown[], V> = [...T, V];

type TuplifyUnion14475<T, L = LastOf14475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14475<TuplifyUnion14475<Exclude<T, L>>, L>;

type DeepPartial14475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14475<T[P]> }
  : T;

type Paths14475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14475<K, Paths14475<T[K], Prev14475[D]>> : never }[keyof T]
  : never;

type Prev14475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14475 {
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

type ConfigPaths14475 = Paths14475<NestedConfig14475>;

interface HeavyProps14475 {
  config: DeepPartial14475<NestedConfig14475>;
  path?: ConfigPaths14475;
}

const HeavyComponent14475 = memo(function HeavyComponent14475({ config }: HeavyProps14475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14475.displayName = 'HeavyComponent14475';
export default HeavyComponent14475;
