'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11990<T> = T extends (infer U)[]
  ? DeepReadonlyArray11990<U>
  : T extends object
  ? DeepReadonlyObject11990<T>
  : T;

interface DeepReadonlyArray11990<T> extends ReadonlyArray<DeepReadonly11990<T>> {}

type DeepReadonlyObject11990<T> = {
  readonly [P in keyof T]: DeepReadonly11990<T[P]>;
};

type UnionToIntersection11990<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11990<T> = UnionToIntersection11990<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11990<T extends unknown[], V> = [...T, V];

type TuplifyUnion11990<T, L = LastOf11990<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11990<TuplifyUnion11990<Exclude<T, L>>, L>;

type DeepPartial11990<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11990<T[P]> }
  : T;

type Paths11990<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11990<K, Paths11990<T[K], Prev11990[D]>> : never }[keyof T]
  : never;

type Prev11990 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11990<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11990 {
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

type ConfigPaths11990 = Paths11990<NestedConfig11990>;

interface HeavyProps11990 {
  config: DeepPartial11990<NestedConfig11990>;
  path?: ConfigPaths11990;
}

const HeavyComponent11990 = memo(function HeavyComponent11990({ config }: HeavyProps11990) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11990) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11990 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11990: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11990.displayName = 'HeavyComponent11990';
export default HeavyComponent11990;
