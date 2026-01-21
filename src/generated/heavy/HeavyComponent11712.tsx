'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11712<T> = T extends (infer U)[]
  ? DeepReadonlyArray11712<U>
  : T extends object
  ? DeepReadonlyObject11712<T>
  : T;

interface DeepReadonlyArray11712<T> extends ReadonlyArray<DeepReadonly11712<T>> {}

type DeepReadonlyObject11712<T> = {
  readonly [P in keyof T]: DeepReadonly11712<T[P]>;
};

type UnionToIntersection11712<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11712<T> = UnionToIntersection11712<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11712<T extends unknown[], V> = [...T, V];

type TuplifyUnion11712<T, L = LastOf11712<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11712<TuplifyUnion11712<Exclude<T, L>>, L>;

type DeepPartial11712<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11712<T[P]> }
  : T;

type Paths11712<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11712<K, Paths11712<T[K], Prev11712[D]>> : never }[keyof T]
  : never;

type Prev11712 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11712<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11712 {
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

type ConfigPaths11712 = Paths11712<NestedConfig11712>;

interface HeavyProps11712 {
  config: DeepPartial11712<NestedConfig11712>;
  path?: ConfigPaths11712;
}

const HeavyComponent11712 = memo(function HeavyComponent11712({ config }: HeavyProps11712) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11712) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11712 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11712: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11712.displayName = 'HeavyComponent11712';
export default HeavyComponent11712;
