'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11373<T> = T extends (infer U)[]
  ? DeepReadonlyArray11373<U>
  : T extends object
  ? DeepReadonlyObject11373<T>
  : T;

interface DeepReadonlyArray11373<T> extends ReadonlyArray<DeepReadonly11373<T>> {}

type DeepReadonlyObject11373<T> = {
  readonly [P in keyof T]: DeepReadonly11373<T[P]>;
};

type UnionToIntersection11373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11373<T> = UnionToIntersection11373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11373<T extends unknown[], V> = [...T, V];

type TuplifyUnion11373<T, L = LastOf11373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11373<TuplifyUnion11373<Exclude<T, L>>, L>;

type DeepPartial11373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11373<T[P]> }
  : T;

type Paths11373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11373<K, Paths11373<T[K], Prev11373[D]>> : never }[keyof T]
  : never;

type Prev11373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11373 {
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

type ConfigPaths11373 = Paths11373<NestedConfig11373>;

interface HeavyProps11373 {
  config: DeepPartial11373<NestedConfig11373>;
  path?: ConfigPaths11373;
}

const HeavyComponent11373 = memo(function HeavyComponent11373({ config }: HeavyProps11373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11373.displayName = 'HeavyComponent11373';
export default HeavyComponent11373;
