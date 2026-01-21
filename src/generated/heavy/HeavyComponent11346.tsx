'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11346<T> = T extends (infer U)[]
  ? DeepReadonlyArray11346<U>
  : T extends object
  ? DeepReadonlyObject11346<T>
  : T;

interface DeepReadonlyArray11346<T> extends ReadonlyArray<DeepReadonly11346<T>> {}

type DeepReadonlyObject11346<T> = {
  readonly [P in keyof T]: DeepReadonly11346<T[P]>;
};

type UnionToIntersection11346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11346<T> = UnionToIntersection11346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11346<T extends unknown[], V> = [...T, V];

type TuplifyUnion11346<T, L = LastOf11346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11346<TuplifyUnion11346<Exclude<T, L>>, L>;

type DeepPartial11346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11346<T[P]> }
  : T;

type Paths11346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11346<K, Paths11346<T[K], Prev11346[D]>> : never }[keyof T]
  : never;

type Prev11346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11346 {
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

type ConfigPaths11346 = Paths11346<NestedConfig11346>;

interface HeavyProps11346 {
  config: DeepPartial11346<NestedConfig11346>;
  path?: ConfigPaths11346;
}

const HeavyComponent11346 = memo(function HeavyComponent11346({ config }: HeavyProps11346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11346.displayName = 'HeavyComponent11346';
export default HeavyComponent11346;
