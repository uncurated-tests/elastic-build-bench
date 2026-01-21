'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14244<T> = T extends (infer U)[]
  ? DeepReadonlyArray14244<U>
  : T extends object
  ? DeepReadonlyObject14244<T>
  : T;

interface DeepReadonlyArray14244<T> extends ReadonlyArray<DeepReadonly14244<T>> {}

type DeepReadonlyObject14244<T> = {
  readonly [P in keyof T]: DeepReadonly14244<T[P]>;
};

type UnionToIntersection14244<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14244<T> = UnionToIntersection14244<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14244<T extends unknown[], V> = [...T, V];

type TuplifyUnion14244<T, L = LastOf14244<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14244<TuplifyUnion14244<Exclude<T, L>>, L>;

type DeepPartial14244<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14244<T[P]> }
  : T;

type Paths14244<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14244<K, Paths14244<T[K], Prev14244[D]>> : never }[keyof T]
  : never;

type Prev14244 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14244<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14244 {
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

type ConfigPaths14244 = Paths14244<NestedConfig14244>;

interface HeavyProps14244 {
  config: DeepPartial14244<NestedConfig14244>;
  path?: ConfigPaths14244;
}

const HeavyComponent14244 = memo(function HeavyComponent14244({ config }: HeavyProps14244) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14244) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14244 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14244: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14244.displayName = 'HeavyComponent14244';
export default HeavyComponent14244;
