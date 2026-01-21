'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11237<T> = T extends (infer U)[]
  ? DeepReadonlyArray11237<U>
  : T extends object
  ? DeepReadonlyObject11237<T>
  : T;

interface DeepReadonlyArray11237<T> extends ReadonlyArray<DeepReadonly11237<T>> {}

type DeepReadonlyObject11237<T> = {
  readonly [P in keyof T]: DeepReadonly11237<T[P]>;
};

type UnionToIntersection11237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11237<T> = UnionToIntersection11237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11237<T extends unknown[], V> = [...T, V];

type TuplifyUnion11237<T, L = LastOf11237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11237<TuplifyUnion11237<Exclude<T, L>>, L>;

type DeepPartial11237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11237<T[P]> }
  : T;

type Paths11237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11237<K, Paths11237<T[K], Prev11237[D]>> : never }[keyof T]
  : never;

type Prev11237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11237 {
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

type ConfigPaths11237 = Paths11237<NestedConfig11237>;

interface HeavyProps11237 {
  config: DeepPartial11237<NestedConfig11237>;
  path?: ConfigPaths11237;
}

const HeavyComponent11237 = memo(function HeavyComponent11237({ config }: HeavyProps11237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11237.displayName = 'HeavyComponent11237';
export default HeavyComponent11237;
