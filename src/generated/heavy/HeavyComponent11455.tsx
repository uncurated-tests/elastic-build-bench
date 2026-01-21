'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11455<T> = T extends (infer U)[]
  ? DeepReadonlyArray11455<U>
  : T extends object
  ? DeepReadonlyObject11455<T>
  : T;

interface DeepReadonlyArray11455<T> extends ReadonlyArray<DeepReadonly11455<T>> {}

type DeepReadonlyObject11455<T> = {
  readonly [P in keyof T]: DeepReadonly11455<T[P]>;
};

type UnionToIntersection11455<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11455<T> = UnionToIntersection11455<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11455<T extends unknown[], V> = [...T, V];

type TuplifyUnion11455<T, L = LastOf11455<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11455<TuplifyUnion11455<Exclude<T, L>>, L>;

type DeepPartial11455<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11455<T[P]> }
  : T;

type Paths11455<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11455<K, Paths11455<T[K], Prev11455[D]>> : never }[keyof T]
  : never;

type Prev11455 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11455<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11455 {
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

type ConfigPaths11455 = Paths11455<NestedConfig11455>;

interface HeavyProps11455 {
  config: DeepPartial11455<NestedConfig11455>;
  path?: ConfigPaths11455;
}

const HeavyComponent11455 = memo(function HeavyComponent11455({ config }: HeavyProps11455) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11455) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11455 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11455: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11455.displayName = 'HeavyComponent11455';
export default HeavyComponent11455;
