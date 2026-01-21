'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11576<T> = T extends (infer U)[]
  ? DeepReadonlyArray11576<U>
  : T extends object
  ? DeepReadonlyObject11576<T>
  : T;

interface DeepReadonlyArray11576<T> extends ReadonlyArray<DeepReadonly11576<T>> {}

type DeepReadonlyObject11576<T> = {
  readonly [P in keyof T]: DeepReadonly11576<T[P]>;
};

type UnionToIntersection11576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11576<T> = UnionToIntersection11576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11576<T extends unknown[], V> = [...T, V];

type TuplifyUnion11576<T, L = LastOf11576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11576<TuplifyUnion11576<Exclude<T, L>>, L>;

type DeepPartial11576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11576<T[P]> }
  : T;

type Paths11576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11576<K, Paths11576<T[K], Prev11576[D]>> : never }[keyof T]
  : never;

type Prev11576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11576 {
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

type ConfigPaths11576 = Paths11576<NestedConfig11576>;

interface HeavyProps11576 {
  config: DeepPartial11576<NestedConfig11576>;
  path?: ConfigPaths11576;
}

const HeavyComponent11576 = memo(function HeavyComponent11576({ config }: HeavyProps11576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11576.displayName = 'HeavyComponent11576';
export default HeavyComponent11576;
