'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11636<T> = T extends (infer U)[]
  ? DeepReadonlyArray11636<U>
  : T extends object
  ? DeepReadonlyObject11636<T>
  : T;

interface DeepReadonlyArray11636<T> extends ReadonlyArray<DeepReadonly11636<T>> {}

type DeepReadonlyObject11636<T> = {
  readonly [P in keyof T]: DeepReadonly11636<T[P]>;
};

type UnionToIntersection11636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11636<T> = UnionToIntersection11636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11636<T extends unknown[], V> = [...T, V];

type TuplifyUnion11636<T, L = LastOf11636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11636<TuplifyUnion11636<Exclude<T, L>>, L>;

type DeepPartial11636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11636<T[P]> }
  : T;

type Paths11636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11636<K, Paths11636<T[K], Prev11636[D]>> : never }[keyof T]
  : never;

type Prev11636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11636 {
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

type ConfigPaths11636 = Paths11636<NestedConfig11636>;

interface HeavyProps11636 {
  config: DeepPartial11636<NestedConfig11636>;
  path?: ConfigPaths11636;
}

const HeavyComponent11636 = memo(function HeavyComponent11636({ config }: HeavyProps11636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11636.displayName = 'HeavyComponent11636';
export default HeavyComponent11636;
