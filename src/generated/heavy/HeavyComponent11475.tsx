'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11475<T> = T extends (infer U)[]
  ? DeepReadonlyArray11475<U>
  : T extends object
  ? DeepReadonlyObject11475<T>
  : T;

interface DeepReadonlyArray11475<T> extends ReadonlyArray<DeepReadonly11475<T>> {}

type DeepReadonlyObject11475<T> = {
  readonly [P in keyof T]: DeepReadonly11475<T[P]>;
};

type UnionToIntersection11475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11475<T> = UnionToIntersection11475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11475<T extends unknown[], V> = [...T, V];

type TuplifyUnion11475<T, L = LastOf11475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11475<TuplifyUnion11475<Exclude<T, L>>, L>;

type DeepPartial11475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11475<T[P]> }
  : T;

type Paths11475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11475<K, Paths11475<T[K], Prev11475[D]>> : never }[keyof T]
  : never;

type Prev11475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11475 {
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

type ConfigPaths11475 = Paths11475<NestedConfig11475>;

interface HeavyProps11475 {
  config: DeepPartial11475<NestedConfig11475>;
  path?: ConfigPaths11475;
}

const HeavyComponent11475 = memo(function HeavyComponent11475({ config }: HeavyProps11475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11475.displayName = 'HeavyComponent11475';
export default HeavyComponent11475;
