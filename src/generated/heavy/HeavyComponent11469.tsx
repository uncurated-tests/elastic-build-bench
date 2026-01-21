'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11469<T> = T extends (infer U)[]
  ? DeepReadonlyArray11469<U>
  : T extends object
  ? DeepReadonlyObject11469<T>
  : T;

interface DeepReadonlyArray11469<T> extends ReadonlyArray<DeepReadonly11469<T>> {}

type DeepReadonlyObject11469<T> = {
  readonly [P in keyof T]: DeepReadonly11469<T[P]>;
};

type UnionToIntersection11469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11469<T> = UnionToIntersection11469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11469<T extends unknown[], V> = [...T, V];

type TuplifyUnion11469<T, L = LastOf11469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11469<TuplifyUnion11469<Exclude<T, L>>, L>;

type DeepPartial11469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11469<T[P]> }
  : T;

type Paths11469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11469<K, Paths11469<T[K], Prev11469[D]>> : never }[keyof T]
  : never;

type Prev11469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11469 {
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

type ConfigPaths11469 = Paths11469<NestedConfig11469>;

interface HeavyProps11469 {
  config: DeepPartial11469<NestedConfig11469>;
  path?: ConfigPaths11469;
}

const HeavyComponent11469 = memo(function HeavyComponent11469({ config }: HeavyProps11469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11469.displayName = 'HeavyComponent11469';
export default HeavyComponent11469;
