'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11265<T> = T extends (infer U)[]
  ? DeepReadonlyArray11265<U>
  : T extends object
  ? DeepReadonlyObject11265<T>
  : T;

interface DeepReadonlyArray11265<T> extends ReadonlyArray<DeepReadonly11265<T>> {}

type DeepReadonlyObject11265<T> = {
  readonly [P in keyof T]: DeepReadonly11265<T[P]>;
};

type UnionToIntersection11265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11265<T> = UnionToIntersection11265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11265<T extends unknown[], V> = [...T, V];

type TuplifyUnion11265<T, L = LastOf11265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11265<TuplifyUnion11265<Exclude<T, L>>, L>;

type DeepPartial11265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11265<T[P]> }
  : T;

type Paths11265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11265<K, Paths11265<T[K], Prev11265[D]>> : never }[keyof T]
  : never;

type Prev11265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11265 {
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

type ConfigPaths11265 = Paths11265<NestedConfig11265>;

interface HeavyProps11265 {
  config: DeepPartial11265<NestedConfig11265>;
  path?: ConfigPaths11265;
}

const HeavyComponent11265 = memo(function HeavyComponent11265({ config }: HeavyProps11265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11265.displayName = 'HeavyComponent11265';
export default HeavyComponent11265;
