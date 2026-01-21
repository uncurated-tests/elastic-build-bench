'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11439<T> = T extends (infer U)[]
  ? DeepReadonlyArray11439<U>
  : T extends object
  ? DeepReadonlyObject11439<T>
  : T;

interface DeepReadonlyArray11439<T> extends ReadonlyArray<DeepReadonly11439<T>> {}

type DeepReadonlyObject11439<T> = {
  readonly [P in keyof T]: DeepReadonly11439<T[P]>;
};

type UnionToIntersection11439<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11439<T> = UnionToIntersection11439<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11439<T extends unknown[], V> = [...T, V];

type TuplifyUnion11439<T, L = LastOf11439<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11439<TuplifyUnion11439<Exclude<T, L>>, L>;

type DeepPartial11439<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11439<T[P]> }
  : T;

type Paths11439<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11439<K, Paths11439<T[K], Prev11439[D]>> : never }[keyof T]
  : never;

type Prev11439 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11439<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11439 {
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

type ConfigPaths11439 = Paths11439<NestedConfig11439>;

interface HeavyProps11439 {
  config: DeepPartial11439<NestedConfig11439>;
  path?: ConfigPaths11439;
}

const HeavyComponent11439 = memo(function HeavyComponent11439({ config }: HeavyProps11439) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11439) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11439 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11439: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11439.displayName = 'HeavyComponent11439';
export default HeavyComponent11439;
