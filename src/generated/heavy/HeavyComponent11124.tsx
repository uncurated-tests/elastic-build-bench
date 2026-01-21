'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11124<T> = T extends (infer U)[]
  ? DeepReadonlyArray11124<U>
  : T extends object
  ? DeepReadonlyObject11124<T>
  : T;

interface DeepReadonlyArray11124<T> extends ReadonlyArray<DeepReadonly11124<T>> {}

type DeepReadonlyObject11124<T> = {
  readonly [P in keyof T]: DeepReadonly11124<T[P]>;
};

type UnionToIntersection11124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11124<T> = UnionToIntersection11124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11124<T extends unknown[], V> = [...T, V];

type TuplifyUnion11124<T, L = LastOf11124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11124<TuplifyUnion11124<Exclude<T, L>>, L>;

type DeepPartial11124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11124<T[P]> }
  : T;

type Paths11124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11124<K, Paths11124<T[K], Prev11124[D]>> : never }[keyof T]
  : never;

type Prev11124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11124 {
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

type ConfigPaths11124 = Paths11124<NestedConfig11124>;

interface HeavyProps11124 {
  config: DeepPartial11124<NestedConfig11124>;
  path?: ConfigPaths11124;
}

const HeavyComponent11124 = memo(function HeavyComponent11124({ config }: HeavyProps11124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11124.displayName = 'HeavyComponent11124';
export default HeavyComponent11124;
