'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11542<T> = T extends (infer U)[]
  ? DeepReadonlyArray11542<U>
  : T extends object
  ? DeepReadonlyObject11542<T>
  : T;

interface DeepReadonlyArray11542<T> extends ReadonlyArray<DeepReadonly11542<T>> {}

type DeepReadonlyObject11542<T> = {
  readonly [P in keyof T]: DeepReadonly11542<T[P]>;
};

type UnionToIntersection11542<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11542<T> = UnionToIntersection11542<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11542<T extends unknown[], V> = [...T, V];

type TuplifyUnion11542<T, L = LastOf11542<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11542<TuplifyUnion11542<Exclude<T, L>>, L>;

type DeepPartial11542<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11542<T[P]> }
  : T;

type Paths11542<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11542<K, Paths11542<T[K], Prev11542[D]>> : never }[keyof T]
  : never;

type Prev11542 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11542<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11542 {
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

type ConfigPaths11542 = Paths11542<NestedConfig11542>;

interface HeavyProps11542 {
  config: DeepPartial11542<NestedConfig11542>;
  path?: ConfigPaths11542;
}

const HeavyComponent11542 = memo(function HeavyComponent11542({ config }: HeavyProps11542) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11542) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11542 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11542: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11542.displayName = 'HeavyComponent11542';
export default HeavyComponent11542;
