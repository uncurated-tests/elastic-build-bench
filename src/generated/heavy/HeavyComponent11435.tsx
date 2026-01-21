'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11435<T> = T extends (infer U)[]
  ? DeepReadonlyArray11435<U>
  : T extends object
  ? DeepReadonlyObject11435<T>
  : T;

interface DeepReadonlyArray11435<T> extends ReadonlyArray<DeepReadonly11435<T>> {}

type DeepReadonlyObject11435<T> = {
  readonly [P in keyof T]: DeepReadonly11435<T[P]>;
};

type UnionToIntersection11435<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11435<T> = UnionToIntersection11435<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11435<T extends unknown[], V> = [...T, V];

type TuplifyUnion11435<T, L = LastOf11435<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11435<TuplifyUnion11435<Exclude<T, L>>, L>;

type DeepPartial11435<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11435<T[P]> }
  : T;

type Paths11435<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11435<K, Paths11435<T[K], Prev11435[D]>> : never }[keyof T]
  : never;

type Prev11435 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11435<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11435 {
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

type ConfigPaths11435 = Paths11435<NestedConfig11435>;

interface HeavyProps11435 {
  config: DeepPartial11435<NestedConfig11435>;
  path?: ConfigPaths11435;
}

const HeavyComponent11435 = memo(function HeavyComponent11435({ config }: HeavyProps11435) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11435) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11435 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11435: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11435.displayName = 'HeavyComponent11435';
export default HeavyComponent11435;
