'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11708<T> = T extends (infer U)[]
  ? DeepReadonlyArray11708<U>
  : T extends object
  ? DeepReadonlyObject11708<T>
  : T;

interface DeepReadonlyArray11708<T> extends ReadonlyArray<DeepReadonly11708<T>> {}

type DeepReadonlyObject11708<T> = {
  readonly [P in keyof T]: DeepReadonly11708<T[P]>;
};

type UnionToIntersection11708<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11708<T> = UnionToIntersection11708<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11708<T extends unknown[], V> = [...T, V];

type TuplifyUnion11708<T, L = LastOf11708<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11708<TuplifyUnion11708<Exclude<T, L>>, L>;

type DeepPartial11708<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11708<T[P]> }
  : T;

type Paths11708<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11708<K, Paths11708<T[K], Prev11708[D]>> : never }[keyof T]
  : never;

type Prev11708 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11708<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11708 {
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

type ConfigPaths11708 = Paths11708<NestedConfig11708>;

interface HeavyProps11708 {
  config: DeepPartial11708<NestedConfig11708>;
  path?: ConfigPaths11708;
}

const HeavyComponent11708 = memo(function HeavyComponent11708({ config }: HeavyProps11708) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11708) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11708 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11708: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11708.displayName = 'HeavyComponent11708';
export default HeavyComponent11708;
