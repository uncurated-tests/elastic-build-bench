'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11220<T> = T extends (infer U)[]
  ? DeepReadonlyArray11220<U>
  : T extends object
  ? DeepReadonlyObject11220<T>
  : T;

interface DeepReadonlyArray11220<T> extends ReadonlyArray<DeepReadonly11220<T>> {}

type DeepReadonlyObject11220<T> = {
  readonly [P in keyof T]: DeepReadonly11220<T[P]>;
};

type UnionToIntersection11220<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11220<T> = UnionToIntersection11220<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11220<T extends unknown[], V> = [...T, V];

type TuplifyUnion11220<T, L = LastOf11220<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11220<TuplifyUnion11220<Exclude<T, L>>, L>;

type DeepPartial11220<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11220<T[P]> }
  : T;

type Paths11220<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11220<K, Paths11220<T[K], Prev11220[D]>> : never }[keyof T]
  : never;

type Prev11220 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11220<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11220 {
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

type ConfigPaths11220 = Paths11220<NestedConfig11220>;

interface HeavyProps11220 {
  config: DeepPartial11220<NestedConfig11220>;
  path?: ConfigPaths11220;
}

const HeavyComponent11220 = memo(function HeavyComponent11220({ config }: HeavyProps11220) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11220) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11220 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11220: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11220.displayName = 'HeavyComponent11220';
export default HeavyComponent11220;
