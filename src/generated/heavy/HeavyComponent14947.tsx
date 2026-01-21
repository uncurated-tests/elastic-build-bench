'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14947<T> = T extends (infer U)[]
  ? DeepReadonlyArray14947<U>
  : T extends object
  ? DeepReadonlyObject14947<T>
  : T;

interface DeepReadonlyArray14947<T> extends ReadonlyArray<DeepReadonly14947<T>> {}

type DeepReadonlyObject14947<T> = {
  readonly [P in keyof T]: DeepReadonly14947<T[P]>;
};

type UnionToIntersection14947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14947<T> = UnionToIntersection14947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14947<T extends unknown[], V> = [...T, V];

type TuplifyUnion14947<T, L = LastOf14947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14947<TuplifyUnion14947<Exclude<T, L>>, L>;

type DeepPartial14947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14947<T[P]> }
  : T;

type Paths14947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14947<K, Paths14947<T[K], Prev14947[D]>> : never }[keyof T]
  : never;

type Prev14947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14947 {
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

type ConfigPaths14947 = Paths14947<NestedConfig14947>;

interface HeavyProps14947 {
  config: DeepPartial14947<NestedConfig14947>;
  path?: ConfigPaths14947;
}

const HeavyComponent14947 = memo(function HeavyComponent14947({ config }: HeavyProps14947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14947.displayName = 'HeavyComponent14947';
export default HeavyComponent14947;
