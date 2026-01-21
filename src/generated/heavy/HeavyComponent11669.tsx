'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11669<T> = T extends (infer U)[]
  ? DeepReadonlyArray11669<U>
  : T extends object
  ? DeepReadonlyObject11669<T>
  : T;

interface DeepReadonlyArray11669<T> extends ReadonlyArray<DeepReadonly11669<T>> {}

type DeepReadonlyObject11669<T> = {
  readonly [P in keyof T]: DeepReadonly11669<T[P]>;
};

type UnionToIntersection11669<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11669<T> = UnionToIntersection11669<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11669<T extends unknown[], V> = [...T, V];

type TuplifyUnion11669<T, L = LastOf11669<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11669<TuplifyUnion11669<Exclude<T, L>>, L>;

type DeepPartial11669<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11669<T[P]> }
  : T;

type Paths11669<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11669<K, Paths11669<T[K], Prev11669[D]>> : never }[keyof T]
  : never;

type Prev11669 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11669<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11669 {
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

type ConfigPaths11669 = Paths11669<NestedConfig11669>;

interface HeavyProps11669 {
  config: DeepPartial11669<NestedConfig11669>;
  path?: ConfigPaths11669;
}

const HeavyComponent11669 = memo(function HeavyComponent11669({ config }: HeavyProps11669) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11669) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11669 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11669: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11669.displayName = 'HeavyComponent11669';
export default HeavyComponent11669;
