'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11647<T> = T extends (infer U)[]
  ? DeepReadonlyArray11647<U>
  : T extends object
  ? DeepReadonlyObject11647<T>
  : T;

interface DeepReadonlyArray11647<T> extends ReadonlyArray<DeepReadonly11647<T>> {}

type DeepReadonlyObject11647<T> = {
  readonly [P in keyof T]: DeepReadonly11647<T[P]>;
};

type UnionToIntersection11647<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11647<T> = UnionToIntersection11647<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11647<T extends unknown[], V> = [...T, V];

type TuplifyUnion11647<T, L = LastOf11647<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11647<TuplifyUnion11647<Exclude<T, L>>, L>;

type DeepPartial11647<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11647<T[P]> }
  : T;

type Paths11647<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11647<K, Paths11647<T[K], Prev11647[D]>> : never }[keyof T]
  : never;

type Prev11647 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11647<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11647 {
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

type ConfigPaths11647 = Paths11647<NestedConfig11647>;

interface HeavyProps11647 {
  config: DeepPartial11647<NestedConfig11647>;
  path?: ConfigPaths11647;
}

const HeavyComponent11647 = memo(function HeavyComponent11647({ config }: HeavyProps11647) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11647) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11647 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11647: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11647.displayName = 'HeavyComponent11647';
export default HeavyComponent11647;
