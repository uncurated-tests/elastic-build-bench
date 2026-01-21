'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14647<T> = T extends (infer U)[]
  ? DeepReadonlyArray14647<U>
  : T extends object
  ? DeepReadonlyObject14647<T>
  : T;

interface DeepReadonlyArray14647<T> extends ReadonlyArray<DeepReadonly14647<T>> {}

type DeepReadonlyObject14647<T> = {
  readonly [P in keyof T]: DeepReadonly14647<T[P]>;
};

type UnionToIntersection14647<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14647<T> = UnionToIntersection14647<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14647<T extends unknown[], V> = [...T, V];

type TuplifyUnion14647<T, L = LastOf14647<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14647<TuplifyUnion14647<Exclude<T, L>>, L>;

type DeepPartial14647<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14647<T[P]> }
  : T;

type Paths14647<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14647<K, Paths14647<T[K], Prev14647[D]>> : never }[keyof T]
  : never;

type Prev14647 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14647<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14647 {
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

type ConfigPaths14647 = Paths14647<NestedConfig14647>;

interface HeavyProps14647 {
  config: DeepPartial14647<NestedConfig14647>;
  path?: ConfigPaths14647;
}

const HeavyComponent14647 = memo(function HeavyComponent14647({ config }: HeavyProps14647) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14647) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14647 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14647: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14647.displayName = 'HeavyComponent14647';
export default HeavyComponent14647;
