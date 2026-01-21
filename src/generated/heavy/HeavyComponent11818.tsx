'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11818<T> = T extends (infer U)[]
  ? DeepReadonlyArray11818<U>
  : T extends object
  ? DeepReadonlyObject11818<T>
  : T;

interface DeepReadonlyArray11818<T> extends ReadonlyArray<DeepReadonly11818<T>> {}

type DeepReadonlyObject11818<T> = {
  readonly [P in keyof T]: DeepReadonly11818<T[P]>;
};

type UnionToIntersection11818<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11818<T> = UnionToIntersection11818<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11818<T extends unknown[], V> = [...T, V];

type TuplifyUnion11818<T, L = LastOf11818<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11818<TuplifyUnion11818<Exclude<T, L>>, L>;

type DeepPartial11818<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11818<T[P]> }
  : T;

type Paths11818<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11818<K, Paths11818<T[K], Prev11818[D]>> : never }[keyof T]
  : never;

type Prev11818 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11818<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11818 {
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

type ConfigPaths11818 = Paths11818<NestedConfig11818>;

interface HeavyProps11818 {
  config: DeepPartial11818<NestedConfig11818>;
  path?: ConfigPaths11818;
}

const HeavyComponent11818 = memo(function HeavyComponent11818({ config }: HeavyProps11818) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11818) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11818 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11818: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11818.displayName = 'HeavyComponent11818';
export default HeavyComponent11818;
