'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11544<T> = T extends (infer U)[]
  ? DeepReadonlyArray11544<U>
  : T extends object
  ? DeepReadonlyObject11544<T>
  : T;

interface DeepReadonlyArray11544<T> extends ReadonlyArray<DeepReadonly11544<T>> {}

type DeepReadonlyObject11544<T> = {
  readonly [P in keyof T]: DeepReadonly11544<T[P]>;
};

type UnionToIntersection11544<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11544<T> = UnionToIntersection11544<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11544<T extends unknown[], V> = [...T, V];

type TuplifyUnion11544<T, L = LastOf11544<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11544<TuplifyUnion11544<Exclude<T, L>>, L>;

type DeepPartial11544<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11544<T[P]> }
  : T;

type Paths11544<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11544<K, Paths11544<T[K], Prev11544[D]>> : never }[keyof T]
  : never;

type Prev11544 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11544<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11544 {
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

type ConfigPaths11544 = Paths11544<NestedConfig11544>;

interface HeavyProps11544 {
  config: DeepPartial11544<NestedConfig11544>;
  path?: ConfigPaths11544;
}

const HeavyComponent11544 = memo(function HeavyComponent11544({ config }: HeavyProps11544) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11544) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11544 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11544: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11544.displayName = 'HeavyComponent11544';
export default HeavyComponent11544;
