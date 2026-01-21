'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11458<T> = T extends (infer U)[]
  ? DeepReadonlyArray11458<U>
  : T extends object
  ? DeepReadonlyObject11458<T>
  : T;

interface DeepReadonlyArray11458<T> extends ReadonlyArray<DeepReadonly11458<T>> {}

type DeepReadonlyObject11458<T> = {
  readonly [P in keyof T]: DeepReadonly11458<T[P]>;
};

type UnionToIntersection11458<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11458<T> = UnionToIntersection11458<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11458<T extends unknown[], V> = [...T, V];

type TuplifyUnion11458<T, L = LastOf11458<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11458<TuplifyUnion11458<Exclude<T, L>>, L>;

type DeepPartial11458<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11458<T[P]> }
  : T;

type Paths11458<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11458<K, Paths11458<T[K], Prev11458[D]>> : never }[keyof T]
  : never;

type Prev11458 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11458<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11458 {
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

type ConfigPaths11458 = Paths11458<NestedConfig11458>;

interface HeavyProps11458 {
  config: DeepPartial11458<NestedConfig11458>;
  path?: ConfigPaths11458;
}

const HeavyComponent11458 = memo(function HeavyComponent11458({ config }: HeavyProps11458) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11458) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11458 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11458: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11458.displayName = 'HeavyComponent11458';
export default HeavyComponent11458;
