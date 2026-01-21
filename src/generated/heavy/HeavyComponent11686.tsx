'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11686<T> = T extends (infer U)[]
  ? DeepReadonlyArray11686<U>
  : T extends object
  ? DeepReadonlyObject11686<T>
  : T;

interface DeepReadonlyArray11686<T> extends ReadonlyArray<DeepReadonly11686<T>> {}

type DeepReadonlyObject11686<T> = {
  readonly [P in keyof T]: DeepReadonly11686<T[P]>;
};

type UnionToIntersection11686<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11686<T> = UnionToIntersection11686<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11686<T extends unknown[], V> = [...T, V];

type TuplifyUnion11686<T, L = LastOf11686<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11686<TuplifyUnion11686<Exclude<T, L>>, L>;

type DeepPartial11686<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11686<T[P]> }
  : T;

type Paths11686<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11686<K, Paths11686<T[K], Prev11686[D]>> : never }[keyof T]
  : never;

type Prev11686 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11686<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11686 {
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

type ConfigPaths11686 = Paths11686<NestedConfig11686>;

interface HeavyProps11686 {
  config: DeepPartial11686<NestedConfig11686>;
  path?: ConfigPaths11686;
}

const HeavyComponent11686 = memo(function HeavyComponent11686({ config }: HeavyProps11686) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11686) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11686 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11686: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11686.displayName = 'HeavyComponent11686';
export default HeavyComponent11686;
