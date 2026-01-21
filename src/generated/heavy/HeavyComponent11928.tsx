'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11928<T> = T extends (infer U)[]
  ? DeepReadonlyArray11928<U>
  : T extends object
  ? DeepReadonlyObject11928<T>
  : T;

interface DeepReadonlyArray11928<T> extends ReadonlyArray<DeepReadonly11928<T>> {}

type DeepReadonlyObject11928<T> = {
  readonly [P in keyof T]: DeepReadonly11928<T[P]>;
};

type UnionToIntersection11928<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11928<T> = UnionToIntersection11928<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11928<T extends unknown[], V> = [...T, V];

type TuplifyUnion11928<T, L = LastOf11928<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11928<TuplifyUnion11928<Exclude<T, L>>, L>;

type DeepPartial11928<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11928<T[P]> }
  : T;

type Paths11928<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11928<K, Paths11928<T[K], Prev11928[D]>> : never }[keyof T]
  : never;

type Prev11928 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11928<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11928 {
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

type ConfigPaths11928 = Paths11928<NestedConfig11928>;

interface HeavyProps11928 {
  config: DeepPartial11928<NestedConfig11928>;
  path?: ConfigPaths11928;
}

const HeavyComponent11928 = memo(function HeavyComponent11928({ config }: HeavyProps11928) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11928) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11928 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11928: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11928.displayName = 'HeavyComponent11928';
export default HeavyComponent11928;
