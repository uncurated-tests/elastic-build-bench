'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11311<T> = T extends (infer U)[]
  ? DeepReadonlyArray11311<U>
  : T extends object
  ? DeepReadonlyObject11311<T>
  : T;

interface DeepReadonlyArray11311<T> extends ReadonlyArray<DeepReadonly11311<T>> {}

type DeepReadonlyObject11311<T> = {
  readonly [P in keyof T]: DeepReadonly11311<T[P]>;
};

type UnionToIntersection11311<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11311<T> = UnionToIntersection11311<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11311<T extends unknown[], V> = [...T, V];

type TuplifyUnion11311<T, L = LastOf11311<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11311<TuplifyUnion11311<Exclude<T, L>>, L>;

type DeepPartial11311<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11311<T[P]> }
  : T;

type Paths11311<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11311<K, Paths11311<T[K], Prev11311[D]>> : never }[keyof T]
  : never;

type Prev11311 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11311<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11311 {
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

type ConfigPaths11311 = Paths11311<NestedConfig11311>;

interface HeavyProps11311 {
  config: DeepPartial11311<NestedConfig11311>;
  path?: ConfigPaths11311;
}

const HeavyComponent11311 = memo(function HeavyComponent11311({ config }: HeavyProps11311) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11311) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11311 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11311: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11311.displayName = 'HeavyComponent11311';
export default HeavyComponent11311;
